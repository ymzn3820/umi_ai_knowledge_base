<template>
  <div
    :class="
      $route.path == '/chat/Chat' || $route.path == '/drawChat/drawChat'
        ? 'mine-title'
        : 'mine-title-on'
    "
  >
    <div class="select_switch" ref="select_switch" style="margin: 0px">
      <div class="logo" @click="toIndexPage">
        <img
          v-if="httpUrls.appletId == 0 || httpUrls.appletId == 1"
          class="logo-img"
          src="../assets/images/huiyuanLogo.png"
          alt=""
        />
        <img
          v-if="httpUrls.appletId == 2"
          class="logo-img"
          src="../assets/images/hywc_logo.png"
          alt=""
        />
        <img
          v-if="httpUrls.appletId == 3"
          class="logo-img"
          src="../assets/images/Frame-logo.jpg"
          alt=""
        />
        <span class="logo-title" v-if="showSidbar">{{ httpUrls.name }}</span>
      </div>
      <div class="btn_group">
        <div class="toMember" @click="toGuanWang">无忧秘书官网</div>

        <el-popover placement="bottom" width="180" trigger="click">
          <div style="display: flex; justify-content: center">
            <div style="">
              <img
                style="width: 180px"
                :src="
                  httpUrls.ossUrl +
                  'static/picture/dc6868c4-f6ea-42dc-935e-5fff7338f72e.jpg'
                "
                alt=""
              />
              <div style="text-align: center; position: relative; top: -9px">
                手机扫码关注微信公众号
              </div>
            </div>
          </div>
          <div slot="reference" class="toMember" style="font-weight: 550">
            公众号
          </div>
        </el-popover>

        <div class="line"></div>
        <div class="toMember" @click="$router.push('/opinion/opinion')">
          投诉及建议
        </div>

        <el-badge :is-dot="noticeReadAll == 1 ? false : true" class="notice">
          <img
            src="../assets/images/bell.png"
            alt=""
            @click="$router.push('/noticeIndex/index')"
          />
        </el-badge>

        <el-button
          class="login_user"
          v-if="userInfo.role == 'guess'"
          @click="login"
          >登录/注册</el-button
        >

        <el-dropdown
          v-else
          style="padding: 0 20px"
          @command="userCenterOperate"
        >
          <span
            class="el-dropdown-link user_bsic"
            @click="$router.push('/center/Center')"
          >
            <span class="img_list">
              <img
                class="picture"
                :src="httpUrls.ossUrl + userInfo.avatar_url"
                alt=""
              />
              <img
                v-if="userInfo.role == 'user'"
                class="VIP"
                src="../assets/images/vipicon.png"
                alt=""
              />
            </span>

            {{ userInfo.nick_name
            }}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              style="
                display: flex;
                justify-content: space-between;
                align-items: center;
              "
              command="0"
            >
              <span
                class="el-dropdown-link user_bsic-link"
                @click="$router.push('/center/Center')"
              >
                <span class="img_list">
                  <img
                    class="picture"
                    :src="httpUrls.ossUrl + userInfo.avatar_url"
                    alt=""
                  />
                  <img
                    v-if="userInfo.role == 'user'"
                    class="VIP"
                    src="../assets/images/vipicon.png"
                    alt=""
                  />
                </span>
                {{ userInfo.nick_name }}
              </span>
              <img
                src="../assets/images/edit3.png"
                alt=""
                @click="$router.push('/center/edit')"
              />
            </el-dropdown-item>

            <div
              style="height: 1px; background-color: #d8d8d8; margin: 20px"
            ></div>
            <el-dropdown-item class="user_center-item" command="2">
              <img class="img" src="../assets/images/dingdan.png" alt="" />
              <span>订单记录</span>
            </el-dropdown-item>
            <el-dropdown-item class="user_center-item" command="3">
              <img
                class="img"
                src="../assets/images/residueNumber.png"
                alt=""
              />
              <span>计费中心</span>
            </el-dropdown-item>
            <el-dropdown-item class="user_center-item" command="5">
              <img class="img" src="../assets/images/kami.png" alt="" />
              <span>卡密兑换</span>
            </el-dropdown-item>
            <el-dropdown-item class="user_center-item" command="7">
              <img class="img" src="../assets/images/version.png" alt="" />
              <span>版本信息 7.2.0</span>
            </el-dropdown-item>

            <div
              style="height: 1px; background-color: #d8d8d8; margin: 20px"
            ></div>

            <el-dropdown-item class="user_center-item" command="8">
              <img class="img" src="../assets/images/log-out.png" alt="" />
              <span>退出登录</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>

    <register ref="Register"></register>
    <pay ref="Pay"></pay>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { messageCenterState } from "../api/notice";
import httpUrls from "../api/requestURL";
import register from "./register";
import pay from "./pay";

export default {
  name: "mine-title",
  data() {
    return {
      httpUrls,
      chatText: "AI35",
      showSid: true,
      searchStatus: false,
      options: [],
      value: [],
      list: [],
      userInfo: {},
    };
  },
  props: {
    showSidbar: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    register,
    pay,
  },
  watch: {
    AIName: {
      deep: true,
      handler() {
        this.getAIName();
      },
    },
    $route: {
      deep: true,
      handler() {
        this.searchStatus = false;
        if (
          this.$route.path == "/chat/Chat" ||
          this.$route.path == "/drawChat/drawChat"
        ) {
          this.getAIName();
        } else if (this.$route.path == "/share/share") {
          if (sessionStorage.getItem("sahre_friend") == "1") {
            this.chatText = "分享邀请";
          } else {
            this.chatText = "分销邀请";
          }
        } else {
          this.chatText = this.$route.meta.title;
        }
      },
    },
    userDataInfo: {
      deep: true,
      handler() {
        this.userInfo = this.userDataInfo;
      },
    },
    userInfoData: {
      deep: true,
      handler() {
        this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
      },
    },
    value: {
      deep: true,
      handler() {
        // this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
        if (this.value) {
          setTimeout(() => {
            let select_switch =
              document.getElementsByClassName("el-select-dropdown");
            console.log(select_switch);
            select_switch.addEventListener("mouseleave", (e) => {
              this.searchStatus = false;
              console.log("离开");
            });
          }, 200);
        }
      },
    },
  },
  created() {
    this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (this.userInfo == null) {
      this.userInfo = { role: "guess" };
    }

    this.$root.Bus.$on("loginInfo", (value) => {
      this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
      if (this.userInfo == null) {
        this.userInfo = { role: "guess" };
      }
    });
  },
  mounted() {
    if (
      this.$route.path == "/chat/Chat" ||
      this.$route.path == "/drawChat/drawChat"
    ) {
      this.getAIName();
    } else {
      this.chatText = this.$route.name;
    }
    this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
  },
  computed: {
    ...mapGetters([
      "AIName",
      "carouselMessage",
      "contactService",
      "mini",
      "officialAccount",
      "carouselMessageState",
      "noticeReadAll",
      "userDataInfo",
      "userInfoData",
    ]),
  },
  methods: {
    toIndexPage() {
      if (this.$route.path != "/index") {
        this.$router.push("/index");
      }
    },
    // 判断AI35和AI40
    getAIName() {
      if (this.AIName == 0) {
        this.chatText = "AI35";
      } else if (this.AIName == 1) {
        this.chatText = "AI40";
      } else if (this.AIName == 2) {
        this.chatText = "DALL·E 2";
      } else if (this.AIName == 3) {
        this.chatText = "百度绘画";
      }
    },

    toGuanWang() {
      window.open("https://www.umi6.com/");
    },

    toIndex() {
      let userInfo = JSON.parse(localStorage.getItem("userInfo"));
      if (userInfo.role == "guess") {
        this.$refs.Register.registerVisible = true;
      } else {
        console.log(1);
        this.$refs.Pay.PayVisible = true;
      }
    },

    toHere() {
      this.$router.push("/here/here");
    },

    showSidar() {
      this.showSid = !this.showSid;
      this.$store.dispatch("app/changeShowSidbar", this.showSid);
      this.$emit("isshowsidbar", this.showSid);
    },
    toNotice(item) {
      this.$router.push({
        path: "/noticeIndex/detail",
        query: { id: item.message_id },
      });
    },
    readAll() {
      let userInfo = JSON.parse(localStorage.getItem("userInfo"));
      messageCenterState({ user_id: userInfo.user_id }).then((res) => {
        if (res.code == 20000) {
          this.$store.dispatch("user/changeNoticeReadAll", 1);
        } else {
          this.$message.error("网络异常，请稍后重试");
        }
      });
    },

    login() {
      this.$refs.Register.registerVisible = true;
    },

    userCenterOperate(e) {
      console.log(e);
      switch (e) {
        // case '0':
        //     this.$router.push('/center/Center')
        //     break;
        case "1":
          this.$router.push("/mineDistribution/mineDistribution");
          break;
        case "2":
          this.$router.push("/order/Order");
          break;
        case "3":
          this.$router.push("/residueNumber/residueNumber");
          break;
        case "4":
          this.$router.push("/share/share");
          sessionStorage.setItem("sahre_friend", "1");
          break;
        case "5":
          this.$router.push("/change/change");
          break;
        case "6":
          this.$router.push("/chatServe");
          break;
        case "7":
          this.$router.push("/version/version");
          break;
        case "8":
          this.logout();
          break;
      }
    },

    logout() {
      this.$confirm("退出登录, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          localStorage.removeItem("userInfo");
          this.$store.dispatch("user/changeInfo", null);
          location.href = "/index";
          this.$root.Bus.$emit("loginInfo", 1); // 更新登录信息
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消",
          });
        });
    },
  },
};
</script>

<style scoped>
.search {
  margin: 0px 20px;
  border: 1px solid #c0c4cc;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding-left: 10px;
}
.search /deep/ .el-input__inner {
  border: 0px solid #ccc;
  border-radius: 8px;
}
.search .el-icon-search {
  font-size: 20px;
  /* font-weight: bold; */
  cursor: pointer;
}
.user_center-item {
  display: flex;
  align-items: center;
}

.user_center-item .img {
  width: 16px;
  margin-right: 10px;
}

.btn_group {
  display: flex;
  align-items: center;
}

.btn_group .toMember {
  line-height: 30px;
  margin: 0 20px;
  position: relative;
  color: #000;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
}

.btn_group .toMember .fire {
  position: absolute;
  right: -14px;
  top: 0;
}

.btn_group .applet,
.btn_group .help,
.btn_group .services {
  margin: 0 20px;
  cursor: pointer;
}

.btn_group .applet {
  color: #333;
  font-size: 16px;
  font-weight: 500;
}

.btn_group .line {
  width: 1px;
  height: 20px;
  background: #bababa;
}

.user_bsic {
  display: flex;
  margin: 0 20px;
  cursor: pointer;
  align-items: center;
}

.user_bsic-link {
  display: flex;
  margin: 0 20px;
  cursor: pointer;
  align-items: center;
  margin-left: 0;
}

.img_list {
  position: relative;
  margin-right: 10px;
}

.img_list .picture {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}

.img_list .VIP {
  width: 40px;
  position: absolute;
  left: -6px;
  bottom: -2px;
}

.user_name {
  line-height: 40px;
  margin-left: 20px;
  color: #000;
  font-size: 16px;
  font-weight: 500;
}

.ai_type_title {
  color: #999999;
  font-size: 20px;
  font-weight: 500;
  margin-right: 90px;
  cursor: pointer;
}

.ai_type_title-on {
  color: #1f64ff;
  border-bottom: 2px solid #1f64ff;
}

.select_switch {
  display: flex;
  justify-content: space-between;
  padding: 8px 20px;
  padding-left: 10px;
}

.mine-title {
  background-color: #ffffff;
  border-bottom: 1px solid #e5e6eb;
  /* width: calc(100% - 240px); */
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 5;
  /* margin-left: 240px; */
}

.mine-title-on {
  background-color: #ffffff;
  border-bottom: 1px solid #e5e6eb;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 5;
}

.content {
  width: 100%;
  height: calc(100% - 22px);
  display: flex;
  flex-direction: column;
}

.select_tyle {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #e5e6eb;
}

.select-topage {
  display: flex;
}

.select-topage .to {
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #333333;
  background: #f2faff;
  border-radius: 6px;
  display: flex;
  padding: 6px 20px;
  cursor: pointer;
}

.select-topage .to img {
  margin-right: 10px;
  vertical-align: middle;
}

.select-topage .to:nth-child(1) {
  margin-right: 10px;
  background-color: #ff9b17;
  color: #ffffff;
}

.select-title {
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  color: #333333;
}

.select-img img {
  width: 26px;
  height: 26px;
  cursor: pointer;
}

.switch_con {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  margin-left: 30px;
  width: 180px;
  height: 80px;
  background: #ffffff;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
}

.con_l {
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #a0aec0;
}

.select_mode .el-tabs__item {
  width: 180px;
  height: 60px;
  padding-left: 18px;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 60px;
  color: #000022;
  text-align: center;
}

.select_mode .el-tabs__active-bar {
  width: 180px;
}

/* .footer_cont {
    background: #fff;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 50px;
    position: relative;
} */
/* .footer_qs {
    width: calc(70% - 240px);
    position: absolute;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    left: calc(50% + 120px);
} */
.qs_top {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
}

.top_left {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #000;
}

.top_right {
  display: flex;
  align-items: center;
}

.change_img {
  width: 12px;
  height: 12px;
  margin-left: 10px;
}

.qs_line {
  width: calc(32% - 40px);
  margin-bottom: 10px;
  padding: 20px;
  border-radius: 6px;
  font-weight: 400;
  font-size: 14px;
  color: #78829a;
  cursor: pointer;
  background-color: #f6f8fb;
}

.cont {
  width: 80%;
  background: #fff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  position: relative;
}

/* .el-input__inner {
    background: #F5F6FA;
    border-radius: 10px;
    height: 58px;
    font-size: 16px;
    padding-left: 30px;
} */

.clear_img {
  width: 29px;
  height: 29px;
  margin-right: 15px;
}

.cg-chat-content {
  width: 80%;
  flex: 1;
  padding: 25px;
  margin: auto;
  overflow: auto;
  padding-top: 0;
}

.cg-chatbox {
  max-width: 66%;
  border-radius: 5px;
  position: relative;
  word-break: break-all;
  word-wrap: break-word;
}

/* .cg-chatbox-left {
    border: 1px solid #F5F6F8;
    display: inline-block;
    background: #F5F6F8;
    border-radius: 8px;
    color: #333;
}

.cg-chatbox-left::before {
    right: 100%;
    border-color: transparent #F5F6F8 transparent transparent;
} */

.cg-chatbox-right {
  border: 1px solid #1f64ff;
  display: inline-block;
  background: #1f64ff;
  border-radius: 8px;
  color: #fff;
  text-align: left;
}

.cg-chatbox-right::before {
  left: 100%;
  border-color: transparent transparent transparent #1f64ff;
}

.cg-chat-left,
.cg-chat-right {
  display: flex;
  align-items: flex-start;
  padding-top: 20px;
}

.cg-user-pic {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  display: block;
}

.cg-left {
  margin-right: 15px;
}

.cg-right {
  margin-right: 15px;
}

.cg-chat-right {
  justify-content: flex-end;
}

.reply {
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 1px;
}

.left_tip {
  font-size: 16px;
  color: #333;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 1px;
}

.left_tip1 {
  font-size: 14px;
  color: #333;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 1px;
}

.as-cont-right {
  width: 84%;
}

.as_text_left {
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
}

.as_text_right {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
}

.copy_img {
  width: 46px;
  height: 22px;
  margin-right: 10px;
}

.copy_img_left {
  width: 46px;
  height: 22px;
  margin-left: 10px;
}

.pay_img {
  width: 80px;
  height: 40px;
  margin-left: 10px;
}

.as-cont-left {
  text-align: left;
}

.cont-time {
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #999;
  margin-bottom: 5px;
}

.chat_bot {
  display: flex;
}

.operete_btn {
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 150%;
  color: #1f64ff;
  border: 1px solid #1f64ff;
  border-radius: 12px;
  padding: 0 10px;
  margin-top: 15px;
  margin-right: 10px;
}

.chat_draw {
  display: flex;
  flex-direction: column;
}

.draw_img {
  width: 256px;
}

.comput {
  display: flex;
}

.put_text {
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 200%;
  color: #aab2c8;
  display: flex;
  align-items: center;
}

.await_img {
  width: 16px;
  height: 16px;
  opacity: 0.5;
}

.supply_cont {
  background: #fff;
  border-radius: 10px;
  width: 400px;
  margin: auto;
}

.supply_img {
  width: 40px;
  height: 28px;
}

.help-setpon {
  margin-top: 20px;
}

.help-setpon-img {
  height: 24px;
  width: 24px;
}

.select_tyle {
  display: flex;
  flex-direction: column;
}

.notice_mask {
  height: 30px;
  display: flex;
  background-color: #ffefe6;
  font-size: 12px;
}

.notice_mask .imgs {
  width: 20px;
  margin: auto 5px;
}

.notice_mask .title {
  line-height: 30px;
  color: #ff6619;
}

.logo {
  /* margin: 12px auto; */
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo-img {
  width: 30px;
  height: 27px;
  /* margin: auto; */
  /* display: block; */
  /* margin-top: 5px; */
  cursor: pointer;
  margin-right: 10px;
}

.logo-title {
  line-height: 40px;
  font-weight: bold;
  color: #333;
  font-size: 16px;
  cursor: pointer;
}

.logo-mark {
  margin: auto;
  display: flex;
}
</style>

<style>
.title-notice .el-carousel__indicators {
  display: none;
}

.btn_group .notice {
  margin: 0 20px;
  cursor: pointer;
}

.btn_group .login_user {
  margin: 0 20px;
  background-color: #1f64ff;
  color: #ffffff;
  padding: 9px 20px;
}
</style>