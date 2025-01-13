import React from "react";
// import "./AboutSection.css"; 
const AboutSection: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Left-side Image */}
        <div className="about-image">
          <img src='h2.jpg' alt="המעצבת" />
        </div>

        {/* Right-side Text */}
        <div className="about-text">
          <h2>קצת עלי</h2>
          <p>
            אני המעצבת שתעזור לך לעצב את הבית שלך בצורה מושלמת. יש לי ניסיון רב
            שנים בתחום העיצוב הפנימי, ואני מתמחה בעיצוב חללים שמתאימים
            בדיוק לטעמכם האישי. הפרויקטים שלי מתרכזים בסטיילינג עכשווי
            ושילוב צבעים שיביאו לכם הרגשה של בית חם ומודרני.
          </p>
          <p>
            במהלך שנות עבודתי, הייתי חלק ממספר רב של פרויקטים מוצלחים,
            ואני מביאה כלים מקצועיים ותשומת לב לפרטים הקטנים ביותר.
            אני מבטיחה להביא איתי פתרונות עיצוב שיתאימו לחלומותיכם
            ותוך שמירה על התקציב.
          </p>
          <p>
            אשמח להכיר אתכם ולשמוע על החזון שלכם לחלל המושלם.
            יחד ניצור עיצוב מדויק שיביא אושר, שלווה, והרמוניה לביתכם.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
