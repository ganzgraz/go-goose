import { useLanguage } from "../i18n/LanguageContext";
import { MEMBERSHIP_URL } from "../links";

/** Asks players to support ganzgraz (the community medium behind the game) by becoming members. */
export function SupportBanner() {
  const { t } = useLanguage();

  return (
    <aside className="support-banner">
      <p className="support-banner-lead">{t.supportBannerLead}</p>
      <p className="support-banner-body">{t.supportBannerBody}</p>
      <a className="support-banner-button" href={MEMBERSHIP_URL} target="_blank" rel="noopener noreferrer">
        {t.creditsMember}
      </a>
    </aside>
  );
}
