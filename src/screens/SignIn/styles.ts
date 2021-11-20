import styled from 'styled-components/native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.shape};
  padding: 20px;
  justify-content: space-between;
`;

export const Header = styled.View`
  width: 100%;
  margin-top: ${getStatusBarHeight()}px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Content = styled.View`
  width: 100%;
  justify-content: center;
  align-items: flex-start;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.secondary};
  margin-right: 10px;
`;

export const InputWrapp = styled.View`
  width: 100%;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
  margin-top: 30px;
`;

export const InputContent = styled.View`
  width: 100%;
  padding: 5px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Divider = styled.View`
  width: 100%;
  border-top-width: 1px;
  border-color: ${({ theme }) => theme.colors.secondary};
`;

export const InputText = styled.TextInput`
  width: 100%;
  padding: 5px;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${RFValue(17)}px;
  margin-left: 5px;
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 10px 5px;
  border-radius: 3px;
  margin-top: 20px;
`;

export const TitleButton = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.primary_light};
  text-align: center;
  font-weight: bold;
`;

export const SignInCell = styled.TouchableOpacity`
  width: 100%;
  padding: 10px 5px;
  border-radius: 3px;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.secondary};
  flex-direction: row;
  justify-content: space-between;
`;

export const TitleCell = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.secondary};
  width: 100%;
  margin-left: -25px;
  text-align: center;
`;