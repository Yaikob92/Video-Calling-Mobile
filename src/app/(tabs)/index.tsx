import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Index = () => {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="px-5 py-3">
        <Text className="text-2xl font-bold text-foreground">Chats</Text>
      </View>
      <View className="flex-1 items-center justify-center">
        <Text className="text-base text-foreground-muted">No chats found.</Text>
      </View>
    </SafeAreaView>
  )
}

export default Index