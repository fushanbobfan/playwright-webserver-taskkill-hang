@echo off
rem Stands in for a taskkill.exe run that fails and ends no process, and records each call in calls.log.
echo %date% %time% taskkill %*>>"%~dp0calls.log"
echo fake taskkill %*: exiting with code 1, nothing ended 1>&2
exit /b 1
