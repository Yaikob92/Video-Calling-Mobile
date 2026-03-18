import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Explore = () => {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="px-5 py-3">
        <Text className="text-2xl font-bold text-foreground">Explore</Text>
      </View>
      <View className="flex-1 items-center justify-center">
        <Text className="text-base text-foreground-muted">Explore new resources here.</Text>
      </View>
    </SafeAreaView>
  )
}

export default Explore