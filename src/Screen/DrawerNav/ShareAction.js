import React from 'react';
import { View, TouchableOpacity, Share } from 'react-native';
import CustomText from '../../Shared/CustomText';
import { DIVIDE_COLOR } from '../../Shared/Theme';

const ShareAction = ({ title, children }) => {

   const onShare = async () => {
      try {
         const result = await Share.share({
            message: "Go with us to follow the live football with 5 famous footbal league.",
         });
         if (result.action === Share.sharedAction) {
            if (result.activityType) {
               console.log("activityType: ", result.activityType);
            } else {
               console.log("Shared!");
            }
         } else if (result.action === Share.dismissedAction) {
            console.log("dismissed share action")
         }
      } catch (err) {
         alert(err.message);
      }
   }

   return (
      <TouchableOpacity
         style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomWidth: 1,
            borderColor: DIVIDE_COLOR,
            paddingHorizontal: 20,
            paddingVertical: 5,
            marginTop: 5,
         }}
         onPress={onShare}
      >
         <View style={{ width: 30, justifyContent: 'center', alignItems: 'center' }}>
            {children}
         </View>
         <CustomText bold style={{ marginLeft: 10 }}>{title}</CustomText>
      </TouchableOpacity>
   )
}

export default ShareAction
