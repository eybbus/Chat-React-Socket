# :metal: Chat-React-Socket :metal:
created with socket.io, create-react-app, react-redux. Without implementing middle ware

### How to run
project is split into two folders. client and server.

Open two terminals.

terminal 1
```bash
cd Chat-React-Socket/server
npm install
npm run start
```

terminal 2
```bash
cd Chat-React-Socket/client
npm install
npm run start
```
this will be running at localhost:3000 and there you go :+1:

### Main tasks

- [x] Implement a chat service, that supports at least 2 different devices at the same time
- [x] You should be able to edit your own messages. Other particpants should see that the message was edited
- [x] You should be able to delete your own messages. Other particpants should see that the message was deleted
- [x] List of active participants to show who is in the session right now
- [x] Style the chat to look like the provided design

This took about 8 hours with some testing ideas and working out the kinks of sockets and redux.

## Thoughts

I want to get into implementing my own middleware, I have only used thunk when using middleware. But I desided to skip the middleware because I thought of KISS, I wanted to try and hit the time of 4 hours of implementing this and I have never implemented my own middleware. 

The basic tasks took about 8 hours, haven't implemented sockets myself before. Sockets are neat stuff. Just need to workout how best to implement socket.io with redux.

### Bonus tasks

If you want to spend more time on this you could implement any of these features

- [ ] Image support
- [ ] Fetch URLs and display a page preview on link hover
- [ ] Emojis
- [ ] Giphy support
- [ ] Alternative layouts / themes
- [ ] End to end encryption
