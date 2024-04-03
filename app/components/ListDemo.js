const ListItem = ({
  title,
  subtitle,
  value,
  iconAction,
  actionClick,
  avatarIcon,
  showTrailing=true
}) => {
  return (
    <div class="cds-list__item">
      <div class="cds-list__item__content">
        {avatarIcon && (
          <div class="cds-list__item__content__avater">
            <span class="cds-avatar cds-avatar--secondary cds-avatar--medium">
              <span class={avatarIcon}></span>
            </span>
          </div>
        )}
        <div class="cds-list__item__content__text">
          <div class="cds-list__item__content__text__title">{title}</div>
          {subtitle && (
            <div class="cds-list__item__content__text__subtitle">
              {subtitle}
            </div>
          )}
        </div>
      </div>

      {showTrailing && <div class="cds-list__item__content__trailing">
        {value && (
          <span class="cds-list__item__content__trailing__value">{value}</span>
        )}

        {iconAction && actionClick && (
          <button class="cds-button cds-button--ghost" onClick={actionClick}>
            <span class={`cds-button__icon ${iconAction}`}></span>
          </button>
        )}
      </div>}
    </div>
  );
};

export const ListDemo = ({ data, showTrailing }) => {
  if (!Array.isArray(data)) {
    return <div>No se puede mostrar la lista. Los datos no son válidos.</div>;
  }
  return (
    <div class="cds-list">
      {data.map((item, index) => (
        <ListItem
          key={index}
          title={item.title}
          subtitle={item.subtitle}
          value={item.value}
          avatarIcon={item.avatarIcon}
          iconAction={item.iconAction}
          actionClick={item.actionClick}
          showTrailing={showTrailing}
        />
      ))}
    </div>
  );
};
