module.exports = ({ env }) => ({
  // ... 其他插件配置
  comments: {
    enabled: true,
    config: {
      badWords: true, // 开启敏感词过滤
      moderatorRoles: ["Authenticated"], // 拥有该角色的用户可以收到管理通知
      
      // 关键配置：哪些模型开启“先审后发”流程
      // 如果你想让文章评论必须你审核后才显示，请确保这里包含了 article
      approvalFlow: ["api::article.article"], 

      entryLabel: {
        // 通用配置，优先匹配这些字段作为后台评论列表的标题显示
        "*": ["Title", "title", "Name", "name", "Subject", "subject"],
        // 针对你的 Article 模型，指定用 'Title' 字段作为标识
        "api::article.article": ["Title"], 
      },

      blockedAuthorProps: ["name", "email"], // 防止垃圾评论冒充这些信息
      
      reportReasons: {
        SPAM: "SPAM",
        INAPPROPRIATE: "INAPPROPRIATE",
        OTHER: "OTHER",
      },
      
      // 如果你没用 GraphQL，这部分可以留空或删除
      gql: {
        auth: true, // 开启后，GQL 查询评论也需要鉴权
      },
    },
  },
});