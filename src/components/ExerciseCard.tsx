import { HStack, VStack, Image, Heading, Text, Icon } from "@gluestack-ui/themed";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { ChevronRight } from "lucide-react-native";

type Props= TouchableOpacityProps

export function ExerciseCard({...rest}: Props) {
    return(
        <TouchableOpacity {...rest}>
            <HStack 
            bg='$gray500' 
            alignItems='center' 
            p='$2' 
            pr='$4' 
            rounded='$md' 
            mb='$3'>
                <Image source={{ 
                    uri: 'https://i.pinimg.com/564x/c6/8b/05/c68b058876bc4c79e4645ee3143ab62f.jpg'
                }}
                alt='skibidi'
                w='$16'
                h='$16'
                rounded='$md'
                mr='$4'
                resizeMode='cover'
                />
                <VStack flex={1}>
                    <Heading fontSize='$lg' color='$white' fontFamily='heading'>
                        Puxada frontal
                    </Heading>
                    <Text fontSize='$sm' color='$gray200' mt='$1' numberOfLines={2}>
                        3 séries x 12 Repetições
                    </Text>
                </VStack>
                <Icon as={ChevronRight} color='$gray300'/>
            </HStack>
        </TouchableOpacity>
    )
}