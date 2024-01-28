const e=`# Git\r
\r
## Introduction\r
\r
When you're working on any application, it's crucial to have a backup. You've probably seen version numbers like _1.1_, _v1.3_, or _2.1.4_ in applications or video games, usually displayed in the corner. These numbers represent the available version of that program. Managing versions of an application is typically done using **Git**. **Git** provides you with nearly complete control over your code, allowing you to maintain a comprehensive version history and easily switch between them. It also streamlines collaboration within projects, making it easy to identify the person responsible for any errors in your application, among other things. So, in essence, **Git** is an indispensable tool for programming in any field.\r
\r
Additionally, some platforms have emerged that allow you to visualize and store the files you've saved, providing a more convenient way to manage your repositories. These platforms include **GitHub**, **GitLab**, and **BitBucket**.\r
\r
For this guide, we'll set aside **BitBucket** because it's less popular and has fewer options and functionalities. However, that doesn't mean it's a bad choice, it's just less commonly used. If you're interested, you can explore it on your own. Both **GitHub** and **GitLab** are excellent options, each with its own pros and cons. You'll find a video explaining the differences between them.\r
\r
## Tutorial\r
\r
I'd like to start by sharing a video that explains the differences between **GitHub** and **GitLab**. If you're unsure about which platform to choose or if you don't have a specific preference at the moment, I recommend opting for **GitHub**. It's a bit more popular and widely used in casual contexts, and its simplified set of tools makes it easier and faster to learn:\r
\r
-   **[GitHub vs GitLab | Difference between GitHub and GitLab | Which one is Best](https://www.youtube.com/watch?v=IFy7avS0ZxU)**\r
\r
Next, you'll find respective courses based on the platform you've chosen:\r
\r
-   **[Git and GitHub for Beginners - Crash Course](https://www.youtube.com/watch?v=RGOj5yH7evk)**\r
\r
-   **[Git for GitLab (Beginner's FULL COURSE)](https://www.youtube.com/watch?v=4lxvVj7wlZw)**\r
\r
## Resources\r
\r
-   This is a short **Git** cheat sheet of the most important commands: **[git-cheat-sheet-education](https://education.github.com/git-cheat-sheet-education.pdf)**\r
\r
## Tips, Tricks and Best Practices\r
\r
-   If you'd like to switch the main branch to \`main\`, use this command: \`git config --global init.defaultBranch main\`. While the preference for \`main\` over \`master\` is subjective, it's widely accepted in professional settings.\r
\r
-   To change the user on the current computer, execute these two commands:\r
\r
    \`\`\`bash\r
    git config --global user.name "GithubUsername"\r
    git config --global user.email GithubEmail@gmail.com\r
    \`\`\`\r
\r
    If you need to change the user for a specific repository without altering the global settings, you can do so right in the terminal for that repository. Simply use the same commands, but omit the \`--global\` option. This will only modify the user for that particular directory, leaving the global settings untouched.\r
\r
-   Personally, the sequence I prefer from initialization to the first push to the repository looks like this:\r
\r
    \`\`\`bash\r
    touch README.md\r
    touch .gitignore\r
    git init\r
    git add .\r
    git tag -a "App Version" -m "Tag Message"\r
    git commit -m "Commit message"\r
    git remote add origin https://github.com/user/repository.git\r
    git push --tags\r
    git push -u origin main\r
    \`\`\`\r
\r
-   Use \`git tag\` to view the versions of your application.\r
\r
-   Once you've pushed once, the next time you only need to write \`git push\` unless you want to push to another branch.\r
\r
-   To push to a private repository, follow these steps:\r
\r
    1. Go to your profile on **GitHub**, navigate to _Settings > Developer settings > Personal Access Token > Tokens(classic)_.\r
    2. Generate a Token, set the expiration date, and be sure to copy the token and save it in a secure place, like a text file, to avoid losing access.\r
    3. When you're ready to push, use this link for the remote instead of the conventional: \`git remote add origin https://User:Token@github.com/user/repository.git\`\r
\r
-   At first, using **Git** might feel challenging, but with practice, it becomes familiar. A good habit to develop is regularly pushing every project or exercise you work on to **GitHub** or **GitLab**. This way, you'll consistently practice the application workflow with **Git**.\r
\r
## Conclusion\r
\r
This concludes our exploration of **Git**. In theory, you can already create a complete website before delving into the _Back-end_ part. However, there's much more to discover in terms of tools and technologies that will facilitate and speed up the development process. Moreover, these skills are highly sought after and almost mandatory when job hunting.\r
`;export{e as default};