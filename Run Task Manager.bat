rem user can run taskmgr without Admin mode
rem see https://www.tenforums.com/general-support/61587-win-10-task-manager-now-only-works-admin-mode-2.html
@echo off
set __compat_layer=runasinvoker
taskmgr.exe