import { useState } from 'react'
import { SectionList } from 'react-native';
import { Heading, Text, VStack } from "@gluestack-ui/themed";

import { HistoryCard } from "@components/HistoryCard";
import { ScreenHeader } from "@components/ScreenHeader";

export function History() {
    const [exercises, setExercises] = useState([
        {
            title: '11.10.2024',
            data: ['Puxada frontal', 'Remada Unilateral']
        },
        {
            title: '12.10.2024',
            data: ['Puxada frontal']
        },
    ])
    return(
        <VStack flex={1}>
            <ScreenHeader title='Histórico de Exercícios'/>
            <SectionList 
            sections={exercises} 
            keyExtractor={item => item}
            renderItem={() => <HistoryCard />}
            renderSectionHeader={({ section }) => (
                <Heading 
                color='$gray200' 
                fontSize='$md' 
                mt='$10'
                mb='$3'
                fontFamily='$heading'
                >
                    {section.title}
                </Heading>
            )}
            style={{ paddingHorizontal: 32 }}
            contentContainerStyle={
                exercises.length === 0 && { flex: 1, justifyContent: 'center'}
            }
            ListEmptyComponent={() => (
                <Text color='$gray100' textAlign='center'> Não há exercícios registrado ainda.</Text>
            )}/>
        </VStack>
    )
}