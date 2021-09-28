@echo off

for %%i in ("%~dp0\..") do set "ROOT_DIR=%%~fi"

for /f "tokens=* delims=" %%a in ('dir "%ROOT_DIR%\provision" /s /b') do (
"%ROOT_DIR%\tools\dos2unix\bin\dos2unix.exe" %%a
)

for /f "tokens=* delims=" %%a in ('dir "%ROOT_DIR%\spec" /s /b') do (
"%ROOT_DIR%\tools\dos2unix\bin\dos2unix.exe" %%a
)
