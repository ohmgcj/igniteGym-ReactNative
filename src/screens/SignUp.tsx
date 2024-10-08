import { VStack, Image, Center, Text, Heading, ScrollView } from "@gluestack-ui/themed"

import { useNavigation } from "@react-navigation/native"

import BackgroundImg from "@assets/background.png"
import Logo from "@assets/logo.svg"

import { Input }  from '@components/Input'
import { Button }  from '@components/Button'
import { AuthNavigatorRoutesProps } from "@routes/auth.routes"

export function SignUp() {
    const navigation = useNavigation()

    function handleGoBack(){
        navigation.goBack()
    }

    return(
        <ScrollView contentContainerStyle={{ flexGrow: 1}} showsVerticalScrollIndicator={false}>
        <VStack flex={1} bg="$gray700">
            <Image 
            w="$full"
            h={624}
            source={BackgroundImg} 
            defaultSource={BackgroundImg}
            alt="Pessoas treinando"
            position="absolute"/>
            <VStack flex={1} px="$10" pb="$16">
            <Center my="$24">
                <Logo />
                <Text color="$gray100" fontSize="$sm">
                    Treine sua mente e seu corpo
                </Text>
            </Center>
            <Center gap="$2" flex={1}>
                <Heading color="$gray100">Crie uma conta</Heading>
                <Input placeholder="E-mail" keyboardType='email-address' autoCapitalize='none'/>
                <Input placeholder="Nome" secureTextEntry/>
                <Input placeholder="Senha" />
                <Input placeholder="Confirmar a senha" />
                <Button title='Criar e acessar'/>
            </Center>
                <Button title='Voltar ao login' variant='outline' mt='$12' onPress={handleGoBack}/>
            </VStack>
        </VStack>
        </ScrollView>
    )
}