class TestListClick extends lark.Sprite {

    private list:swan.List;

    public constructor() {
        super();
        var exml =
            `<s:Scroller xmlns:s="http://ns.egret.com/swan">
                <s:List id="list" width="200" height="400">
                    <s:itemRenderer>
                        <s:ItemRenderer states="up,down,disabled" height="50">
                            <s:Label text="{data.label}" textColor="0x000000" horizontalCenter="0" verticalCenter="0"/>
                        </s:ItemRenderer>
                    </s:itemRenderer>
                </s:List>
            </s:Scroller>`;
        var clazz = EXML.parse(exml);
        var scroller = new clazz();
        this.addChild(scroller);
        var list:swan.List = scroller.list;
        this.list = list;
        var collection = new swan.ArrayCollection();
        for(var i = 0; i < 20; i ++) {
            collection.addItem({"label":"文本" + i});

        }
        list.dataProvider = collection;
        list.on(lark.TouchEvent.TOUCH_TAP, this.select, this);
    }

    public select( e:lark.TouchEvent ){
        lark.log( this.list.selectedItems );
    }
}
