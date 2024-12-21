The solution is to add null checks before accessing the `user.name` property.  We can do this using optional chaining (?.) and the nullish coalescing operator (??).

```javascript
//In a React Native component:
const MyComponent = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetchData().then(setUser);
  }, []);

  return (
    <View>
      <Text>{user?.name ?? 'N/A'}</Text> // Optional chaining and nullish coalescing
    </View>
  );
};
```

Optional chaining (`user?.name`) will safely return `undefined` if `user` is null or undefined. The nullish coalescing operator (`?? 'N/A'`) will then replace `undefined` with 'N/A', or another suitable default value.