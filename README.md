# checkRegex
A simple class to validate the elements that we often encounter during our developments.


# Installation
```bash
yarn install | npm intall

yarn dev | npm run dev
```

## Usage
```javascript
const validator = new checkRegex()
validator.isEmail("@foo.bar") // false
validator.isEmail("john.doe@foo.bar") // true
```

