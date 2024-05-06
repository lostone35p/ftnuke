## How to use
* install bun https://bun.sh/docs/installation

* clone repo
```
git clone https://github.com/lostone35p/ftnuke
```

* cd to directory
```
cd ./ftnuke
```

* install packages
```
bun i
```

* create .env file 
```
touch .env
```

* add the following to .env

```
YOURPK = Paste Here your Pk
RPC = Paste Here your RPC HTTP 
YOURADDY = Paste Here your Address
```

* run the script you want
- clubSnipe needs to be configured with the feed and the user you want to snipe inside the script
- nuke needs to be configured with your address and your JWT from Friend tech inside the script
```
bun clubCli // Input id to buy 
bun clubSnipe // Setup a snipe for a certain user
bun nuke // Nukes all your holdings
```
