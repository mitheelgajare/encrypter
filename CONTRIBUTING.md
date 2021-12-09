# Contributing to encrypter:

We are glad to know that you are eager to contribute to encrypter. Every commit is highly appreciated, be it a grammatical error fix or a new feature.

Before contributing please read our [CODE_OF_CONDUCT](https://github.com/mitheelgajare/encrypter/blob/main/CODE_OF_CONDUCT.md).

## Raising issues:

Have you find a bug in our code? Do you have a new feature suggestion? Do you want to ask a question? Well, the best place to communicate with us is in the **issues** tab.
While raising an issue, use an issue template  *preferably*. If none of the issue templates fit your exact requirement, you are welcome to open a blank issue. 

**While raising an issue make sure to give as much information as possible. This would minimize further discussion and contributors will be able to focus on resolving the issue**

## Contributing:

Contributing is to be done throught pull requests. Here are some instructions to be adhered to while writing pull requests:

- [ ] Write descriptive pull requests explaining in detail what the changes you have done are.
- [ ] If the pull request fixes an issue, reference that issue. This will automatically close the issue once the pull request is accepted.
- [ ] Before you start working on a major pull request, raise an issue suggesting the feature enhancement that you are making. Otherwise if the pull request is not accepted, all of your hard work will be of no use.
- [ ] Write pull request that add small changes to the repository. For example instead of adding ten features in one pull request, write different pull requests for each feature. This will make it easy for code reviewers.
- [ ] Write all pull requests to the main branch *preferably*. 

### All pull requests and commits must have the following format:

This project is using the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/) standard. 

**We request all contributors to follow this format. This will help in creating automated releases for our code.**
      


## What to contribute?

Well, what are we looking for in this repo?

You can help in a number of ways:

- By adding a new hashing algorithm
- If you notice any bug in the frontend code or have a new feature which could be implemented. Raise an issue first, create a pull request once the issue is approved.


## Quick start guide.

1. First clone this repo.
1. The client folder is where all the frontend code is. Once you go inside the folder, you will see the following files and folders: 
      ```
      components: All the react components to be reused,
      pages: all the nextJS pages,
      public: the public files
      styles: All the frontend styling
      ```


## Code guidelines: 

1. Use Prettier - Code Formatter for every file.
1. Use yarn
1. Type `yarn install` to install dependencies in the `node_modules` folder
1. To change the styling use Scss only. Add a new .scss file for every major component. Import every file in the `App.scss` file. It will be compiled to `App.css` .


## Conclusion:

Thank you for reading this document (It was very long, sorry 😬). We look forward to your contributions.

