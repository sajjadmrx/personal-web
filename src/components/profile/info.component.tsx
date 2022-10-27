import React from "react";

export class InfoComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <table className="w-full text-gray-300 text-sm max-w-[250px] mb-2">
                    <tbody>
                    <tr className="flex justify-between mb-4">
                        <td>متولد</td>
                        <td>1381/03/24</td>
                    </tr>
                    <tr className="flex justify-between mb-4">
                        <td>شهر محل سکونت</td>
                        <td>تهران</td>
                    </tr>
                    <tr className="flex justify-between mb-4">
                        <td>ایمیل</td>
                        <td>sajjadmrx@gmail.com</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}