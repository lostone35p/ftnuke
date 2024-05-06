## How to use
* install bun
* cd to directory
```
cd ./ftnuke
```

* install packages
```
bun i
```

* create .env file and add the following
```
YOURPK = <Paste Here your Pk>
RPC = <Paste Here your RPC HTTP>
YOURADDY = <Paste Here your Address>
```

* Run the script you want
- clubSnipe needs to be configured with the feed and the user you want to snipe inside the script
- nuke needs to be configured with your address and your JWT from Friend tech inside the script
```
bun clubCli // Input id to buy 
bun clubSnipe // Setup a snipe for a certain user
bun nuke // Nukes all your holdings
```
