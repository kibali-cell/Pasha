
export const listChatRooms = /* GraphQL */ `
query GetUser($id: ID!) {
    getUser(id: $id) {
        id
        ChatRooms {
            items {
            chatRoom {
                id
                users {
                items {
                    id
                    user {
                    id
                    image
                    name
                    }
                }
                }
                LastMessage {
                id
                createdAt
                text
                }
            }
            }
        }
        }
    }
`;

  