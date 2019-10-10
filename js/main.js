"ui";
//供Auto.js使用
var json = files.read("source.json")
obj = JSON.parse(json);

ui.layout(
    <vertical padding="16">

        <text text="请输入需要查询的指令" textColor="black" textSize="16sp" marginTop="16" />
        <input id="keywords" />

        <button id="search" text="查询" w="auto" style="Widget.AppCompat.Button.Colored" />

        <card w="*" h="70" margin="10 5" cardCornerRadius="2dp"
            cardElevation="1dp" gravity="center_vertical">
            <vertical padding="18 8" h="auto">
                <text text="指令名称" textColor="#222222" textSize="16sp" />
                <text text="" textColor="#999999" textSize="14sp" id="name"/>
            </vertical>
            <View bg="#f44336" h="*" w="10" />
        </card>
        <card w="*" h="70" margin="10 5" cardCornerRadius="2dp"
            cardElevation="1dp" gravity="center_vertical">
            <vertical padding="18 8" h="auto">
                <text text="汇编语言格式" textColor="#222222" textSize="16sp" />
                <text text="" textColor="#999999" textSize="14sp" id="format"/>
            </vertical>
            <View bg="#ff5722" h="*" w="10" />
        </card>
        <card w="*" h="170" margin="10 5" cardCornerRadius="2dp"
            cardElevation="1dp" gravity="center_vertical">
            <vertical padding="18 8" h="auto">
                <text text="功能" textColor="#222222" textSize="16sp" />
                <text text="" textColor="#999999" textSize="14sp" id="usage"/>
            </vertical>
            <View bg="#4caf50" h="*" w="10" />
        </card>
        <card w="*" h="70" margin="10 5" cardCornerRadius="2dp"
            cardElevation="1dp" gravity="center_vertical">
            <vertical padding="18 8" h="auto">
                <text text="影响标志位" textColor="#222222" textSize="16sp" />
                <text text="" textColor="#999999" textSize="14sp" id="effectFlag"/>
            </vertical>
            <View bg="#2196f3" h="*" w="10" />
        </card>

    </vertical>
);

ui.search.click(() => {
    var key = ui.keywords.text();

    //指令为空
    if (key == "") {
        ui.keywords.setError("指令不能为空！");
        return;
    }

    //查询不到时提示
    try {
        obj.instruc[key].name
    } catch (error) {
        ui.keywords.setError("查询不到此指令，请检查是否拼写错误！");
        return;
    }

    ui.name.setText(obj.instruc[key].name);
    ui.format.setText(obj.instruc[key].format);
    ui.usage.setText(obj.instruc[key].usage);
    ui.effectFlag.setText(obj.instruc[key].effectFlag);
});