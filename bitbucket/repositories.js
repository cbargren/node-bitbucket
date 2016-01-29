var util = require('util');
var AbstractApi = require("./abstract_api").AbstractApi;

var RepositoriesApi = exports.RepositoriesApi = function(api) {
    this.$api = api;
};

util.inherits(RepositoriesApi, AbstractApi);

(function() {

//    /**
//     * Search repos by keyword
//     * http://develop.github.com/p/repo.html
//     *
//     * @param {String}  $query            the search query
//     */
//    this.search = function(query, callback)
//    {
//        this.$api.get(
//            'repos/search/' + encodeURI(query),
//            null, null,
//            this.$createListener(callback, "repositories")
//        );
//    };
//
    // /**
    // * Get extended information about a repository by its username and repo name
    // *
    // * @param {String}  username         the user who owns the repo
    // * @param {String}  repo             the name of the repo
    // */
    // this.show = function(username, repo, callback)
    // {
    //     this.$api.get(
    //         'repositories/' + encodeURI(username) + "/" + encodeURI(repo),
    //         null, null,
    //         callback
    //     );
    // };

    /**
     * Get the repositories of a user
     * http://confluence.atlassian.com/display/BBDEV/Repositories
     *
     * @param {String}  username         the username
     */
    this.getUserRepos = function(username, callback)
    {
      this.$api.get(
          'repositories/' + encodeURI(username),
          null, null,
          this.$createListener(callback, 'getUserRepos')
      );
    };
    this.getUserRepos.hasNextPage() = (function() {
      return !!this.$nextPageURLs['getUserRepos']
    }).bind(this);
    this.getUserRepos.hasPreviousPage() = (function() {
      return !!this.$previousPageURLs['getUserRepos']
    }).bind(this);
    this.getUserRepos.getNextPage(callback) = (function() {
      this.$api.doPrebuiltSend(
          this.$nextPageURLs['getUserRepos'],
          this.$createListener(callback, 'getUserRepos')
      );
    }).bind(this);
    this.getUserRepos.getPreviousPage(callback) = (function() {
      this.$api.doPrebuiltSend(
          this.$previousPageURLs['getUserRepos'],
          this.$createListener(callback, 'getUserRepos')
      );
    }).bind(this);

//    /**
//     * Get the tags of a repository
//     * http://develop.github.com/p/repo.html
//     *
//     * @param {String}  username         the username
//     * @param {String}  repo             the name of the repo
//     */
//    this.getRepoTags = function(username, repo, callback)
//    {
//        this.$api.get(
//            'repos/show/' + encodeURI(username) + "/" + encodeURI(repo) + "/tags",
//            null, null,
//            this.$createListener(callback, "tags")
//        );
//    };
//
//    /**
//     * Get the branches of a repository
//     * http://develop.github.com/p/repo.html
//     *
//     * @param {String}  username         the username
//     * @param {String}  repo             the name of the repo
//     */
//    this.getRepoBranches = function(username, repo, callback)
//    {
//        this.$api.get(
//            'repos/show/' + encodeURI(username) + "/" + encodeURI(repo) + "/branches",
//            null, null,
//            this.$createListener(callback, "branches")
//        );
//    };
//
//    /**
//     * Get the languages of a repository
//     * http://develop.github.com/p/repo.html
//     *
//     * @param {String}  username         the username
//     * @param {String}  repo             the name of the repo
//     */
//    this.getRepoLanguages = function(username, repo, callback)
//    {
//        this.$api.get(
//            'repos/show/' + encodeURI(username) + "/" + encodeURI(repo) + "/languages",
//            null, null,
//            this.$createListener(callback, "languages")
//        );
//    };
//
//    /**
//     * Get the collaborators of a repository
//     * http://develop.github.com/p/repo.html
//     *
//     * @param {String}  username         the username
//     * @param {String}  repo             the name of the repo
//     */
//    this.getRepoCollaborators = function(username, repo, callback)
//    {
//        this.$api.get(
//            'repos/show/' + encodeURI(username) + "/" + encodeURI(repo) + "/collaborators",
//            null, null,
//            this.$createListener(callback, "collaborators")
//        );
//    };
//
//    /**
//     * Get the contributors of a repository
//     * http://develop.github.com/p/repo.html
//     *
//     * @param {String}  username         the username
//     * @param {String}  repo             the name of the repo
//     * @param {Boolean} anon             retreive non-github contributors
//     */
//    this.getRepoContributors = function(username, repo, anon, callback)
//    {
//        if (typeof(anon) == 'function') {
//            callback = anon;
//            anon = '';
//        }
//        else {
//            anon = '/anon';
//        }
//        this.$api.get(
//            'repos/show/' + encodeURI(username) + "/" + encodeURI(repo) + "/contributors" + anon,
//            null, null,
//            this.$createListener(callback, "contributors")
//        );
//    };
//
//    /**
//     * Get the watchers of a repository
//     * http://develop.github.com/p/repo.html
//     *
//     * @param {String}  username         the username
//     * @param {String}  repo             the name of the repo
//     */
//    this.getRepoWatchers = function(username, repo, callback)
//    {
//        this.$api.get(
//            'repos/show/' + encodeURI(username) + "/" + encodeURI(repo) + "/watchers",
//            null, null,
//            this.$createListener(callback, "watchers")
//        );
//    };

}).call(RepositoriesApi.prototype);