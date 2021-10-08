@echo off

setlocal ENABLEEXTENSIONS

rem Set root directory
for %%i in ("%~dp0\..") do set "ROOT_DIR=%%~fi"
set TOOLS_DIR=%ROOT_DIR%\tools
set TMP_DIR=%ROOT_DIR%\tmp
set dos2unixZipfileName=dos2unix-7.4.2-win64.zip
set dos2unixExistence=

rem Start init scripts
:main
  call :installDos2Unix && call "%ROOT_DIR%\scripts\burn.bat"
exit /b 0

rem Install dos2unix tool
:installDos2Unix
  call :dos2unixExist

  if "%dos2unixExistence%"=="true" (
    echo "'dos2unix' tool already installed"
  ) else (
    call :download "https://waterlan.home.xs4all.nl/dos2unix/%dos2unixZipfileName%"
    call :unZipFile "%TOOLS_DIR%\dos2unix" "%TMP_DIR%\%dos2unixZipfileName%"
    echo "'dos2unix' tool installed successfully !"
  )
goto :eof

rem Check if dos2unix is installed before
:dos2unixExist
  if exist "%TOOLS_DIR%\dos2unix\bin\dos2unix.exe" set dos2unixExistence=true
goto :eof

rem Download files to tmp\ directory
:download
  mkdir %TMP_DIR% 2> nul && cd %TMP_DIR% && curl %1 -O
goto :eof

rem Unzip archive files
:unZipFile <ExtractTo> <newzipfile>
  set vbs="%temp%\_.vbs"
  if exist %vbs% del /f /q %vbs%
  >%vbs%  echo Set fso = CreateObject("Scripting.FileSystemObject")
  >>%vbs% echo If NOT fso.FolderExists(%1) Then
  >>%vbs% echo fso.CreateFolder(%1)
  >>%vbs% echo End If
  >>%vbs% echo set objShell = CreateObject("Shell.Application")
  >>%vbs% echo set FilesInZip=objShell.NameSpace(%2).items
  >>%vbs% echo objShell.NameSpace(%1).CopyHere(FilesInZip)
  >>%vbs% echo Set fso = Nothing
  >>%vbs% echo Set objShell = Nothing
  cscript //nologo %vbs%
  if exist %vbs% del /f /q %vbs%
goto :eof

endlocal
