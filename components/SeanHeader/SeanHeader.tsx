import styles from "./TheNextFourYearsPage.module.css";

export const SeanHeader = () => {
  return (
    <div className="flex flex-row items-center justify-center space-x-4">
      <p className="text-sm text-center text-gray italic">Sean Cavanaugh</p>
      <div className={styles.nextFourYears} />
      <p className="text-sm text-center text-gray italic">
        The Change Monmouth Needs
      </p>
    </div>
  );
};
