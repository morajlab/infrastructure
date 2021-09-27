### Visual Studio Code Server (code-server)

Moraj Lab vagrant machine uses [Visual Studio Code Server (code-server)](https://github.com/cdr/code-server) as its main code editor .

### Usage

vagrant machine uses **Port forwarding via SSH** for connecting to the editor.

1. Forward local port 8080 to 127.0.0.1:8080 on the remote instance by running the following command on your local machine:

```text
vagrant ssh -- -N -L 8080:127.0.0.1:8080
```

2. At this point, you can access code-server by pointing your web browser to:

```text
http://127.0.0.1:8080
```
