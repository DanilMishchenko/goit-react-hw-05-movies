import * as moviesApi from 'services/moviesApi';
import { CastContainer, List, Item } from './CastList.styled';

export const CastList = ({ cast }) => {
  return (
    <CastContainer>
      <List>
        {cast.map(member => {
          const img = member.profile_path
            ? `${moviesApi.BASE_URL_IMG}${member.profile_path}`
            : 'https://thumbs.dreamstime.com/b/%D0%BE%D1%82%D1%81%D1%83%D1%82%D1%81%D1%82%D0%B2%D0%B8%D0%B5-%D0%B4%D0%BE%D1%81%D1%82%D1%83%D0%BF%D0%BD%D0%BE%D0%B3%D0%BE-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F-%D0%BD%D0%B5%D1%82-%D0%B7%D0%BD%D0%B0%D1%87%D0%BA%D0%B0-%D0%B4%D0%BB%D1%8F-%D0%B2%D0%B5%D0%B1-%D1%83%D0%B7%D0%BB%D0%BE%D0%B2-177641087.jpg';
          return (
            <Item key={member.id}>
              <div>
                <img src={img} alt={member.name} />
              </div>
              <p>{member.name}</p>
            </Item>
          );
        })}
      </List>
    </CastContainer>
  );
};
