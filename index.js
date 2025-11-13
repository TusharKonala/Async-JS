console.log("Before");
getUser(1, (user) => {
  console.log("User", user);
  getRepositories(user.gitHubUsername, (repos) => {
    console.log("Repos: ", repos);
  });
});
console.log("After");

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Fetching data from the database...");
    callback({
      id: id,
      gitHubUsername: "Tushar Konala",
    });
  }, 2000);
  return 1;
}

function getRepositories(username, callback) {
  setTimeout(() => {
    console.log(`Calling GitHub API for finding repo of ${username}..`);
    callback(["repo-1", "repo-2", "repo-3"]);
  }, 2000);
}
