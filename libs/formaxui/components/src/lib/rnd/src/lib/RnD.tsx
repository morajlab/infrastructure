import { FunctionComponent, useState, forwardRef } from 'react';
import { Position } from '@formaxui/components-position';
import { Resizable } from 're-resizable';
import {
  DndContext,
  useSensor,
  MouseSensor,
  TouchSensor,
  KeyboardSensor,
  Translate,
  useSensors,
  useDraggable,
} from '@dnd-kit/core';
import { Styles } from './RnD.styles';
import type {
  IRnDProps,
  IDraggableProps,
  IDraggableItemProps,
} from './RnD.types';

export const Draggable = forwardRef<HTMLButtonElement, IDraggableProps>(
  function Draggable(
    { dragOverlay, dragging, handle, listeners, translate, children, ...props },
    ref
  ) {
    const { root } = Styles({ translate });

    return (
      <div {...root}>
        <button
          ref={ref}
          aria-label="Draggable"
          data-cypress="draggable-item"
          tabIndex={handle ? -1 : undefined}
          {...props}
          {...(handle ? {} : listeners)}
        />
        {children}
      </div>
    );
  }
);

const DraggableItem = ({ translate, children }: IDraggableItemProps) => {
  const { attributes, isDragging, listeners, setNodeRef } = useDraggable({
    id: 'draggable',
  });

  return (
    <Draggable
      ref={setNodeRef}
      dragging={isDragging}
      listeners={listeners}
      translate={translate}
      {...attributes}
      children={children}
    />
  );
};

export const RnD: FunctionComponent<IRnDProps> = ({
  width,
  height,
  minHeight,
  minWidth,
  children,
  ...rest
}) => {
  const defaultCoordinates = {
    x: 0,
    y: 0,
  };
  const [{ translate }, setTranslate] = useState<{
    initialTranslate: Translate;
    translate: Translate;
  }>({ initialTranslate: defaultCoordinates, translate: defaultCoordinates });
  const [initialWindowScroll, setInitialWindowScroll] =
    useState(defaultCoordinates);
  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor)
  );

  return (
    <DndContext
      sensors={sensors}
      onDragStart={() => {
        setInitialWindowScroll({
          x: window.scrollX,
          y: window.scrollY,
        });
      }}
      onDragMove={({ delta }) => {
        setTranslate(({ initialTranslate }) => ({
          initialTranslate,
          translate: {
            x: initialTranslate.x + delta.x - initialWindowScroll.x,
            y: initialTranslate.y + delta.y - initialWindowScroll.y,
          },
        }));
      }}
      onDragEnd={() => {
        setTranslate(({ translate }) => {
          return {
            translate,
            initialTranslate: translate,
          };
        });
        setInitialWindowScroll(defaultCoordinates);
      }}
      onDragCancel={() => {
        setTranslate(({ initialTranslate }) => ({
          translate: initialTranslate,
          initialTranslate,
        }));
        setInitialWindowScroll(defaultCoordinates);
      }}
    >
      <Position type="absolute" {...rest}>
        <DraggableItem translate={translate}>
          <Resizable
            children={children}
            minHeight={minHeight}
            minWidth={minWidth}
            defaultSize={{
              width: width ?? minWidth ?? 300,
              height: height ?? minHeight ?? 300,
            }}
          />
        </DraggableItem>
      </Position>
    </DndContext>
  );
};

export default RnD;
