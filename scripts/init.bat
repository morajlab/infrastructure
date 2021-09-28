@echo off
setlocal

for %%i in ("%~dp0\..") do set "ROOT_DIR=%%~fi"

mkdir "%ROOT_DIR%\tmp" && cd "%ROOT_DIR%\tmp" && curl https://waterlan.home.xs4all.nl/dos2unix/dos2unix-7.4.2-win64.zip -O

Call :UnZipFile "%ROOT_DIR%\tools\dos2unix" "%ROOT_DIR%\tmp\dos2unix-7.4.2-win64.zip"
exit /b

:UnZipFile <ExtractTo> <newzipfile>
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
