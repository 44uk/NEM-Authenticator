# Contributing to NEM Authenticator

First off, thank you for considering contributing to NEM Authenticator. 
It’s people like you that make NEM Authenticator such a great tool.

NEM Authenticator is an open source project and we love to receive contributions from 
our community — you! There are many ways to contribute, from writing tutorials or blog 
posts, improving the documentation, submitting bug reports and feature requests or 
writing code which can be incorporated into NEM Authenticator itself.

Following these guidelines helps to communicate that you respect the time of 
the developers managing and developing this open source project. In return, 
they should reciprocate that respect in addressing your issue, assessing changes, 
and helping you finalize your pull requests.

Please, **don't use the issue tracker for support questions**. 
Join telegram group [https://t.me/nemprojects](telegram-group) for community support.

### Setup the project

Fork the project

```bash
$ git clone git@github.com:<YOUR_USERNAME>/NEM-Authenticator.git
cd NEM-Authenticator
```
Install dependencies

```bash
$ npm install -g ionic cordova typescript @angular/cli
$ npm install
```

Run the project

```bash
$ ionic cordova run android
```

## Bug reports

If you think you have found a bug in NEM Authenticator, first make sure that you 
are testing against the latest version of NEM Authenticator - your issue may already 
have been fixed. If not, search our issues list on GitHub in case a similar 
issue has already been opened.

It is very helpful if you can prepare a reproduction of the bug. In other words, 
provide a small test case which we can run to confirm your bug. It makes it easier to 
find the problem and to fix it.
 
Please, take in consideration the next template to report your issue:

> **Expected Behaviour**\
> Short and expresive sentance explaining what the application should do.\
> **Current Behaviour**\
> A short sentance explaning what the application does. Attach some screenshot if it helps to understant the issue.\
> **Steps to reproduce**\
> For faster issue detection, we would need a step by step description do reproduce the issue. Example:
> 1. Insert the private key.
> 2. Go to another application.
> 3. Open again the application, the private key is blank.

Provide as much information as you can.

Open a new issue [here](github-issues).

## Feature requests

If you find yourself wishing for a feature that doesn't exist in NEM Authenticator, 
you are probably not alone. There are bound to be others out there with similar 
needs. Many of the features that NEM Authenticator has today have been added because 
our users saw the need. Open an [issue](github-issues) on our issues list on GitHub which describes 
the feature you would like to see, why you need it, and how it should work.

## Contributing code and documentation changes

If you have a bugfix or new feature that you would like to contribute to Elasticsearch, please find or open an issue 
about it first. Talk about what you would like to do. It may be that somebody is already working on it, or that there 
are particular issues that you should know about before implementing the change.

We enjoy working with contributors to get their code accepted. There are many approaches to fixing a problem and it is 
important to find the best approach before writing too much code.

### Fork and clone the repository

You will need to fork the main NEM Authenticator code or documentation repository and clone 
it to your local machine. See [github help page](https://help.github.com/articles/fork-a-repo/) for help.

Further instructions for specific projects are given below.

In order to get in touch with other developers/contributors, join our 
[telegram group](telegram-group).

### Submitting your changes

Once your changes and tests are ready to submit for review:

1. Test your changes
   
    Run the test suite to make sure that nothing is broken.
    
2. Submit a pull request

    Push your local changes to your forked copy of the repository and [submit a pull request](https://help.github.com/articles/about-pull-requests/). In the pull request, choose a title which sums up the changes that you have made, and in the body provide more details about what your changes do. Also mention the number of the issue where discussion has taken place, eg "Closes #123".
    
Then sit back and wait. There will probably be discussion about the pull request and, if any changes are needed, we would love to work with you to get your pull request merged into NEM Authenticator.

## Contributing to the NEM Authenticator codebase

**TODO** Contact [@aleix_mp](https://t.me/aleix_mp) or [@guillemsc](https://t.me/guillemsc)



*CONTRIBUTING.md is based on [CONTRIBUTING-template.md](https://github.com/nayafia/contributing-template/blob/master/CONTRIBUTING-template.md)* 
and [elasticsearch/CONTRIGUTING](https://github.com/elastic/elasticsearch/blob/master/CONTRIBUTING.md)

[pull-request]:https://help.github.com/articles/about-pull-requests/
[telegram-group]:https://t.me/nemprojects
