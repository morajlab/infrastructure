@echo off

set ROOT_DIR=%~dp0\..\

for /f "tokens=* delims=" %%a in ('dir "%ROOT_DIR%\provision" /s /b') do (
"%ROOT_DIR%\tools\dos2unix\bin\dos2unix.exe" %%a
)

for /f "tokens=* delims=" %%a in ('dir "%ROOT_DIR%\spec" /s /b') do (
"%ROOT_DIR%\tools\dos2unix\bin\dos2unix.exe" %%a
)
