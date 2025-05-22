import Avatar from 'react-avatar';
export default function GenerateAvatar({name}){
    return(
        <Avatar name={name} size="50" round="50px"/>
    )
}