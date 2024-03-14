// 导入组件
import Vue from "vue";
import Router from "vue-router";
// 登录
import login from "@/views/login";
// 首页
import index from "@/views/index";
/**
 * 基础菜单
 */

//意见反馈
const opinion = () => import("@/views/system/opinion");

//AI智能体
const knowledgeRobot = () => import("@/views/knowledge//knowledgeRobot");
//创建AI智能体
const knowledgeCreatedChat = () => import("@/views/knowledge/knowledgeCreatedChat");
//AI知识库 
const knowledge = () => import("@/views/knowledge//knowledge");
//AI智能体对话
const knowledgeChat = () => import("@/views/knowledge//knowledgeChat");

// 升级会员
const Member = () => import("@/views/member/Member");
// 个人中心
const Center = () => import("@/views/center/Center");
// 修改个人信息
const editCneter = () => import("@/views/center/centerMessage");
// 流量剩余
const residueNumber = () => import("@/views/center/residueNumber");
// 订单记录
const Order = () => import("@/views/order/Order");
// 联系客服
const services = () => import("@/views/service/service");
// 卡密兑换
const Change = () => import("@/views/change/change");
// 系统定制
const customized = () => import("@/views/operate/customized");
// 问题反馈
const questionFeedback = () =>
  import("@/views/questionFeedback/questionFeedback");
// 历史版本
const version = () => import("../components/version");
// 公告
const noticeIndex = () => import("@/views/notice/index");
// 公告详情
const noticeDetail = () => import("@/views/notice/detail");
// 企业定制首页
const enterpriseWEB = () => import("@/views/enterpriseWEB/index");
// 企业定制新建
const enterpriseDetail = () => import("@/views/enterpriseWEB/detail");
// 企业定制列表首页
const editAIBaseIndex = () => import("@/views/enterpriseWEB/editAIBase/index");
// 企业定制/首页列表
const editAIBaseIndexView = () =>
  import("@/views/enterpriseWEB/editAIBase/indexView");
// 企业定制/编辑企业信息
const editAIBaseDetail = () =>
  import("@/views/enterpriseWEB/editAIBase/detail");
// 企业定制/数字员工
const digitalEmployees = () =>
  import("@/views/enterpriseWEB/editAIBase/digitalEmployees");
// 企业定制/数字员工编辑
const digitalEmployeesEdit = () =>
  import("@/views/enterpriseWEB/editAIBase/digitalEmployeesEdit");
// 企业定制/数字员工对话
const digitalEmployeesChat = () =>
  import("@/views/enterpriseWEB/editAIBase/digitalEnmloyeesChat");
// 企业定制/成员管理
const memberManagement = () =>
  import("@/views/enterpriseWEB/editAIBase/memberManagement");
// 企业定制/企业设置
const enterpriseSet = () =>
  import("@/views/enterpriseWEB/editAIBase/enterpriseSet");
// 启用路由
Vue.use(Router);

// 导出路由
export default new Router({
  // mode: 'history', // 去掉url的#
  routes: [
    {
      path: "/index",
      name: "首页",
      component: index,
      iconCls: "el-icon-tickets",
      children: [
        // {
        //   path: "/ljh",
        //   title: "首页",
        //   component: indexs,
        //   meta: {
        //     name: "首页",
        //     requireAuth: false
        //   }
        // },
        {
          path: "/index",
          title: "首页",
          component: knowledgeRobot,
          meta: {
            name: "index",
            requireAuth: false
          }
        },
        {
          path: "/index/knowledgeRobot",
          title: "AI智能体",
          component: knowledgeRobot,
          meta: {
            name: "AI智能体",
            requireAuth: false
          }
        },
        {
          path: "/index/knowledgeCreatedChat",
          title: "创建AI智能体",
          component: knowledgeCreatedChat,
          meta: {
            name: "创建AI智能体",
            requireAuth: false
          }
        },
        {
          path: "/index/knowledge",
          title: "AI知识库",
          component: knowledge,
          meta: {
            name: "AI知识库",
            requireAuth: false
          }
        },
        {
          path: "/index/knowledgeChat",
          title: "AI知识库对话",
          component: knowledgeChat,
          meta: {
            name: "AI知识库对话",
            requireAuth: false
          }
        },
        {
          path: "/enterpriseWEB/index",
          name: "企业AI定制",
          component: enterpriseWEB,
          meta: {
            title: "企业AI定制",
            requireAuth: true
          }
        },
        {
          path: "/enterpriseWEB/detail",
          name: "企业知识",
          component: enterpriseDetail,
          meta: {
            title: "企业AI定制",
            requireAuth: true
          }
        },
        {
          path: "/enterpriseWEB/indexList",
          name: "企业知识库列表首页",
          component: editAIBaseIndex,
          meta: {
            title: "企业AI定制",
            requireAuth: true
          },
          children: [
            {
              path: "indexListView",
              name: "企业知识库列表",
              component: editAIBaseIndexView,
              meta: {
                title: "企业AI定制",
                requireAuth: true
              }
            },
            {
              path: "editBase",
              name: "企业知识库修改",
              component: editAIBaseDetail,
              meta: {
                title: "企业AI定制",
                requireAuth: true
              }
            },
            {
              path: "digitalEmployees",
              name: "数字员工",
              component: digitalEmployees,
              meta: {
                title: "企业AI定制",
                requireAuth: true
              }
            },
            {
              path: "digitalEmployeesEdit",
              name: "数字员工编辑",
              component: digitalEmployeesEdit,
              meta: {
                title: "企业AI定制",
                requireAuth: true
              }
            },
            {
              path: "chat",
              name: "数字员工对话",
              component: digitalEmployeesChat,
              meta: {
                title: "企业AI定制",
                requireAuth: true
              }
            },
            {
              path: "memberManagement",
              name: "成员管理",
              component: memberManagement,
              meta: {
                title: "企业AI定制",
                requireAuth: true
              }
            },
            {
              path: "enterpriseSet",
              name: "企业设置",
              component: enterpriseSet,
              meta: {
                title: "企业AI定制",
                requireAuth: true
              }
            }
          ]
        },
        {
          path: "/member/Member",
          name: "购买套餐",
          component: Member,
          meta: {
            title: "购买套餐",
            requireAuth: false
          }
        },
        {
          path: "/center/Center",
          name: "个人中心",
          component: Center,
          meta: {
            title: "个人中心",
            requireAuth: false
          }
        },
        {
          path: "/opinion/opinion",
          name: "意见反馈",
          component: opinion,
          meta: {
            title: "意见反馈",
            requireAuth: false
          }
        },
        {
          path: "/center/edit",
          name: "修改信息",
          component: editCneter,
          meta: {
            title: "修改信息",
            requireAuth: false
          }
        },
        {
          path: "/residueNumber/residueNumber",
          name: "计费中心",
          component: residueNumber,
          meta: {
            title: "计费中心",
            requireAuth: false
          }
        },
        {
          path: "/order/Order",
          name: "订单记录",
          component: Order,
          meta: {
            title: "订单记录",
            requireAuth: false
          }
        },
        {
          path: "/services/services",
          name: "联系客服",
          component: services,
          meta: {
            title: "联系客服",
            requireAuth: true
          }
        },
        {
          path: "/change/change",
          name: "卡密兑换",
          component: Change,
          meta: {
            title: "卡密兑换",
            requireAuth: true
          }
        },
        {
          path: "/questionFeedwark/questionFeedwark",
          name: "问题反馈",
          component: questionFeedback,
          meta: {
            title: "问题反馈",
            requireAuth: true
          }
        },
        {
          path: "/version/version",
          name: "历史版本",
          component: version,
          meta: {
            title: "历史版本",
            requireAuth: true
          }
        },
       
        {
          path: "/noticeIndex/index",
          name: "公告",
          component: noticeIndex,
          meta: {
            title: "公告",
            requireAuth: true
          }
        },
        {
          path: "/noticeIndex/detail",
          name: "公告详情",
          component: noticeDetail,
          meta: {
            title: "公告详情",
            requireAuth: true
          }
        },
      ]
    },
    {
      path: "/login",
      name: "登录",
      component: login,
      hidden: true,
      meta: {
        requireAuth: false
      }
    },
    {
      path: "/customized/customized",
      name: "系统定制",
      component: customized,
      hidden: true,
      meta: {
        title: "系统定制",
        requireAuth: true
      }
    },
    
  ]
});
