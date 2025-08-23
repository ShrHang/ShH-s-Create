// 导入必要的类（根据实际环境调整导入路径）
import { $ICurio } from "top.theillusivec4.curios.api.type.capability.ICurio"

PlayerEvents.chat(event => {
    const player = event.player
    const message = event.message

    if (message == 'op') {
        // event.server.runCommand(`/op ${player.name}`)
        player.sendSystemMessage(Component.literal("已赋予权限"))
        event.cancel(true)
    }
    if (message == 'deop') {
        event.server.runCommand(`/deop ${player.name}`)
    }

    if (player.tags.contains('chat_ban')) {
        // 玩家拥有该 tag，可以执行相关逻辑
        player.sendSystemMessage(Component.literal("您当前处于禁言状态！").red())
        event.cancel(true)
    }
})