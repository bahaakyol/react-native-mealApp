import {FlatList , View,Text} from 'react-native'
import { recipes } from '../../data/data'
import Card from '../Card/Card'

const MealList = () => {

  
    return (
        <FlatList
        data={recipes}
        renderItem={({item}) => <Card 
        id = {item.id}
        image = {item.image}
        name = {item.name}
        />}
        keyExtractor={item => item.id}
      />

    )
}   

export default MealList