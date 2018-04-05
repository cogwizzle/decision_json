# decision_json
Creates a JSON representation of a decision tree.

## Install
To install the project, checkout the repository and run a npm install command.
```
npm i -g
```

## Basic Usage

To start a new JSON representation of a decision tree run the following command:

```
decision_json init -f test.json
```

`TODO placeholder for an image`

Following the command, you will be prompted to answer a few questions and a json file will be generated.

```
{
    "name": "test",
    "state": []
}
```

To add a state to an existing decision tree, you run the *add* command.

```
decision_json add -f test.json
```

Following the *add* command, the user will be asked a series of questions about the state you are creating.  If no other states exist, it will create an initial state.

```
{
    "name": "test",
    "state": [
        {
            "id": 0,
            "parent": null,
            "slide": "# Which do you prefer?",
            "link": null
        }
    ]
}
```

To list all of the states in a decision tree JSON file, the *list* command can be run.
```
decision_json list -f test.json
```

`TODO add picture of output`

## Support

Please [open an issue](https://github.com/jfehrman/decision_json/issues/new) for support.

## Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add comments, and [open a pull request](https://github.com/jfehrman/decision_json/compare).