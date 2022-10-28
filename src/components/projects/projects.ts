import {Project} from "../../shared/interfaces/project.interface";

export const projects: Array<Project> = [{
    id: 1,
    names: {farsi: "ایزی دانلود", eng: 'EasyDl'},
    description: ` ایزی دانلود یک وب
                                    آپلیکیشن ساده واسه دانلود از پلتفرم های موزیک مثل رادیو جوان و

                                    اسپاتیفای و ... هست.`,
    url: "https://easydl.net",
    checkUrl: "https://api.easydl.net",
    image: "/assets/images/projects/easydl.jpg",
}]