## Terraformers - YCIT021 class

![Logo](https://ycit-team-terraformers.github.io/favicon.png)

[Terraformers' Landing page](https://ycit-team-terraformers.github.io/)

# Tools

## Required Software
Here is the minimum recommended software you'll need to interface with the products and scripts used by the team

## Workstation software
This should be installed on your Windows workstation for maximum compatibility with Linux tooling and scripts. 
If you can't install software on your workstation (corporate or otherwise controlled environment), one possible substitute is [Google Cloud Shell](https://cloud.google.com/shell), though you should be aware that you may run into limitations in the Cloud Shell environment.
- [Windows Subsystem for Linux (WSL) with Ubuntu Linux](https://ubuntu.com/wsl)
- [Minikube](https://minikube.sigs.k8s.io/docs/start/)
- [Microsoft Visual Studio Code](https://code.visualstudio.com/download)
- [Tutorial: Get started using Visual Studio Code with Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/tutorials/wsl-vscode)

## Linux software
This should be installed where you run Linux (inside your WSL Ubuntu VM).
- [Google Cloud SDK components](https://cloud.google.com/sdk/docs/install#linux)
- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [Terraform](https://learn.hashicorp.com/tutorials/terraform/install-cli)
- [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/)
- (optional - if you want to beautify and customize your shell prompt) [powerline-go](https://github.com/justjanne/powerline-go)

### Helpful scripts
See the **scripts** directory inside the **ycit-team-terraformers-dotfiles** repository for some helpful scripts.

- [backup_wsl.bash](https://github.com/ycit-team-terraformers/ycit-team-terraformers-dotfiles/blob/main/scripts/backup_wsl.bash): Can be used to configure a backup of your HOME inside the WSL virtual machine, to a location on your physical host PC (including OneDrive, which may serve as a quick disaster recovery method).


# Configuration

## Install WSL

There are two ways to have WSL installed on Windows, it depends on the Windows version. 

### Windows 10 version 2004 or higher

Prerequisites: 
You must be running Windows 10 version 2004 and higher (Build 19041 and higher) or Windows 11

**Install**
You can now install everything you need to run Windows Subsystem for Linux (WSL) by entering this command in PowerShell or Windows Command Prompt and then restarting your machine.

```
wsl --install
```

This command will enable the required optional components, download the latest Linux kernel, set WSL 2 as your default, and install a Linux distribution for you (Ubuntu by default, see below to change this).
*The first time you launch a newly installed Linux distribution, a console window will open and you'll be asked to wait for files to de-compress and be stored on your machine. All future launches should take less than a second.*

### WSL manual installation steps for older Windows versions 

Open PowerShell as Administrator and run the following commands

1. Enable WSL feature

```
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```

2. Enabled Virtual machine

```
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

3. Restart the machine

4. Download WSL 

```
https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi
```

5. Run the WSL installer

6. Set WSL as 2 by default

```
wsl --set-default-version 2
```

7. Check distro installed 

```
wsl --list --verbose
```

## Install Linux distribution Ubuntu 20.04 LTS 

Download Ubuntu
```
invoke-webrequest -outfile "$home\downloads\ubuntu_20_04.appx" -uri https://aka.ms/wslubuntu2004
```
Install downloaded package

```
add-appxpackage "$home\downloads\ubuntu_20_04.appx"
```

*The first time you launch a newly installed Linux distribution, a console window will open and you'll be asked to wait for files to de-compress and be stored on your machine.*
*All future launches should take less than a second.*

## Run the Distribution and create the user.

Run the following command from PowerShell or Windows Terminal

```
ubuntu2004.exe
```

## Exit the linux distribution

Type exit

```
exit
```

# Minikube

To install Minikube, run the linux distribution and execute the following commands:

## Download the latest version of Minikube
```
curl -Lo minikube https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
```
## Make the binary executable
```
chmod +x ./minikube
```
## Move the binary to your executable path
```
sudo mv ./minikube /usr/local/bin/
```

# Resource Center

- [Docker Sample application](https://docs.docker.com/get-started/02_our_app/)

- [Best practices for writing Dockerfile](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)

- [Configure GitHub actions](https://docs.docker.com/ci-cd/github-actions/)

- [Docker file library](https://github.com/jessfraz/dockerfiles)

# Projects

- Project 1 DevOps
- Project 2

# Team

- Antonio M
- Camilo M
- Christian B
- Devon P
- Diego P
- Mohammad B


## About GitHub Pages

You can use the [editor on GitHub](https://github.com/Vidinci/vidinci.github.io/edit/main/README.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.
