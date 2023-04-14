import { Project } from "../../shared/interfaces/project.interface";

export const projects: Array<Project> = [
    {
        id: 1,
        names: { farsi: "ایزی دانلود", eng: 'EasyDl' },
        description: ` ایزی دانلود یک وب
                                    آپلیکیشن ساده واسه دانلود از پلتفرم های موزیک مثل رادیو جوان و

                                    اسپاتیفای و ... هست.`,
        url: "https://easydl.net",
        checkUrl: "https://api.easydl.net",
        image: "/assets/images/projects/easydl.jpg",
        openSource: {
            supported: false
        }
    },
    {
        id: 2,
        names: { farsi: "DnsChanger", eng: "DnsChanger" },
        description: "یک DNS Changer اوپن سورس برای سیستم عامل های ویندوز ، مک و لینوکس که هدفش جمع آوری بهترین DNS ها در یک اپلیکیشن امن هستش",
        url: "https://dnschanger.github.io/",
        checkUrl: "https://dnschanger.github.io/",
        image: "/assets/images/projects/dnschanger.png",
        openSource: {
            supported: true,
            url: `https://github.com/DnsChanger/dnsChanger-desktop`
        }
    }

]