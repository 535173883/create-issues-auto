const { Octokit } = require("octokit");
const dayjs = require("dayjs");
const core = require("@actions/core");
const token = core.getInput("token");

const octokit = new Octokit({
  auth: token,
});

octokit.rest.issues.create({
  owner: "535173883",
  repo: "daily-schedule",
  title: getTitle(),
  body: `格式： 
  计划：

  工作内容：
  
  学习内容：
  
  阅读书籍：  
  
  ...`,
});

function getTitle() {
  // UTC时间转化
  const time = Number(new Date() + 8 * 3600 * 1000);
  return "【每日计划】" + " " + dayjs(time).format("YYYY-MM-DD");
}
