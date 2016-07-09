# Day 1.5
## Minor adjustments to the git page

Just fixing some of the markdown (I'm new at this!) and putting together some of the rules.

Tim


# Day 1
## Setting up the skeleton

So to start, I'm just searching around for ways to set up the site.  I'm not very sure how a site should work, though I assume there should be a source (src) folder, and a dist folder somewhere.

Here's something I found doing a quick google search: [Setting up react for ES6 with webpack and babel](https://www.twilio.com/blog/2015/08/setting-up-react-for-es6-with-webpack-and-babel-2.html)

After installing all these components, I added [Travis CI](https://travis-ci.org/himynameistimli/news) to my installation to automate testing and deployment.

I also added an S3 bucket and purchased a domain which points to that S3 bucket at [newslist.co](http://newslist.co). It's quite bare at this time but we'll see how it goes.

Lastly, I added the ability to update my S3 bucket directly from travis so I can deploy via my git commits. (in progress)
