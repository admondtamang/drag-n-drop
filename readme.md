**React Issue**

- hooks in class components → Many old projects uses class compnents,where react hooks cannot use used.

- useMemo, useCallback know what to use and when to use. But real scenerio hard find a place to use.

- promise call multiple in array beacuase of Asynchronous in nature (solution: using Promise.all() or wrapping promise in reduce function)

- useEffect in child component can be very tricky when parent component also has useEffect to call api → problems faced mostly in isLoading

- testing is not prioritize- used selenium for end to end testing.

- React is a Library. Different folder architecture and pattern.

- SEO is hard. (Solution: used framework like Nextjs )

**Map and filter**

map

- Iterate throught Array and also make a copy of it and return an array.
- return element of array can be modified.

```
const data=[1,2,3]
const result = data.map(row=> row+1)
```

### Output [2,3,4]

filter

- filters data from array and return an array.
- Example ->

```
const data=[1,2,3]
const result = data.filter(row=> row===2)
```

### Output [1,3]
