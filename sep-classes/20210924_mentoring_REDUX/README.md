```
$ npx create-react-app my-app --template redux
```

## Dispatching the action

The rest of the cycle is automatic. Action object=> reducer=> save it to the store and => type
If you have state in the parent and want to pass it to chils.
From child to another child you have to pass it through the parent.
Solution is one center place for state, and responsible for providing piexces of dstsate into another components.

You need to use the cycle
the redux cycle starts

- dispacthing an action on submit/ event/ whatever

```javascript
onSubmit=()=>dispatch(addUser);
{
    username: "Ally",
    email: 'ally@et.com'
}
```

- than the action dispatched has a

{type: ,
payload: } which are the keys to what the reducer is going to do
type is to tell the reducer what to do,

reducers listen ti action objects

Component is whwere

dispatch on submit, data gonna be dispatched to action creator
create action, its a function that for example adds a user.
