import { Card, CardBody, Image, Stack, Text, Heading, CardFooter, HStack, Avatar, VStack } from "@chakra-ui/react"
import React from "react"
import { User } from "../../../../../entities/User"
import { ChatRoom } from "../../../../../entities/ChatRoom"
import { ButtonVPrimary } from "../../../common/Button/VPrimary"
import { ButtonDPrimary } from "../../../common/Button/DPrimary"
import { convertDateToString } from "../../../../../utils/libs/convertDateToString"

type Props = {
  chatRoom: ChatRoom
  onClickJoin: () => void
  onClickLeave: () => void
} & React.ComponentProps<typeof Card>

export const ChatRoomCard = ({ chatRoom, onClickJoin, onClickLeave, ...props }: Props) => {
  return (
    <Card direction={{ base: "column", sm: "row" }} overflow="hidden" variant="outline" {...props}>
      <Image objectFit="cover" maxW={{ base: "100%", sm: "200px" }} src={chatRoom.imagePath} alt={chatRoom.title} />

      <Stack w="full">
        <CardBody>
          <VStack alignItems={"start"}>
            <Heading size="md">{chatRoom.title}</Heading>
            <Text>{chatRoom.description}</Text>
            <Text fontSize={"sm"} color={"gray.500"}>
              作成日:{convertDateToString(chatRoom.createdAt)}
            </Text>
            <HStack>
              {chatRoom.users.map((user: User) => (
                <Avatar src={user.imageProfileUrl} key={user.userId} size={"xs"} />
              ))}
            </HStack>
          </VStack>
        </CardBody>

        <CardFooter>
          <HStack w="full" justifyContent={"end"}>
            <ButtonVPrimary onClick={onClickLeave}>退出する</ButtonVPrimary>
            <ButtonDPrimary onClick={onClickJoin}>入室する</ButtonDPrimary>
          </HStack>
        </CardFooter>
      </Stack>
    </Card>
  )
}
