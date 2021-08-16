# Noip-duc
A noip dynamic update client, complete with a Dockerfile. When using as a dockercontainer you need to add a .env file with:
```
NOIP_USERNAME=<your_noip_username>
NOIP_PASSWORD=<your_noip_password>
NOIP_HOSTNAME=<your_noip_hostname>
```
I haven't found a solution to hide the password yet, but if docker is protected with a `sudo` password and a login password it 'should' be fine.
