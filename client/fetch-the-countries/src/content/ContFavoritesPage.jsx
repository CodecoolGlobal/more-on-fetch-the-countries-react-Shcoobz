import ComTitle from '../components/ComTitle';
import ComBtn from '../components/ComBtn';
import ComSearch from '../components/ComSearch';
import CardFavoritePage from '../cards/CardFavoritePage';

function ContFavoritesPage({
  countrySortOrder,
  onCountrySort,
  onBackBtnClick,
  favoriteSearchValue,
  onFavoritesSearchInput,
  handleAddRemoveFavToggle,
  favorites,
  onCountrySelect,
}) {
  return (
    <div>
      <ComTitle text='Favorite Countries:' />
      <div>
        <ComSearch
          value={favoriteSearchValue}
          onChange={onFavoritesSearchInput}
          placeholder='I like to search it, search it ... even more ... favorites!'
        />
      </div>
      <div className='btn-container'>
        <ComBtn
          text={`Sort: ${
            countrySortOrder === 'asc' ? 'Ascending' : 'Descending'
          }`}
          onClick={onCountrySort}
          className='sort-btn'
          iconClassName=''
          icon={null}
          tooltip={false}
        />
        <ComBtn text='Back' onClick={onBackBtnClick} className='back-btn' />
      </div>
      <div>
        {favorites.length > 0 ? (
          <div className='container favorites-view'>
            <CardFavoritePage
              favorites={favorites}
              handleAddRemoveFavToggle={handleAddRemoveFavToggle}
              onCountrySelect={onCountrySelect}
              favoriteSearchValue={favoriteSearchValue}
            />
          </div>
        ) : (
          <div>
            <p>Nothing here, mate.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ContFavoritesPage;
