import Channels from "./channels/channels.vue";
import ZiMChannels from "./channels/zim-channels.vue";
import Account from "./account/account.vue";
import About from "./about/about.vue";

export default vue => [
	{
		path: "",
		controller: () => {
			vue.mainView = ZiMChannels;
			vue.pagesView = Channels;
		}
	},
	{
		path: "channels",
		controller: () => {
			vue.mainView = ZiMChannels;
			vue.pagesView = Channels;
		}
	},
	{
		path: "account",
		controller: () => {
			vue.mainView = Account;
			vue.pagesView = null;
		}
	},
	{
		path: "about",
		controller: () => {
			vue.mainView = About;
			vue.pagesView = null;
		}
	}
];