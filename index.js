const { Octokit } = require("octokit");
const dayjs = require("dayjs");
const core = require("@actions/core");
const token = core.getInput("token");
// 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
const octokit = new Octokit({
  auth: token,
});

octokit.rest.issues.create({
  owner: "535173883",
  repo: "create-issues-auto",
  title: getTitle(),
  body: ` 计划：

  工作内容：
  
  学习内容：
  
  阅读书籍：  `,
});

function getTitle() {
  const time = Number(new Date() - 8 * 3600 * 1000);
  return "【每日计划】" + "" + dayjs(time).format("YYYY-MM-DD");
}
