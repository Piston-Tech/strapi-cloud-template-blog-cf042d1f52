import type { Struct, Schema } from '@strapi/strapi';

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    title: Schema.Attribute.String;
    body: Schema.Attribute.Text;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface ElementsVideo extends Struct.ComponentSchema {
  collectionName: 'components_elements_videos';
  info: {
    displayName: 'Video';
    icon: 'play';
    description: '';
  };
  attributes: {
    URL: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'https://youtu.be/guCqg4NqUVw'>;
    Preview: Schema.Attribute.Media<'images'>;
    Title: Schema.Attribute.String;
  };
}

export interface ElementsDays extends Struct.ComponentSchema {
  collectionName: 'components_elements_days';
  info: {
    displayName: 'Days';
    icon: 'sun';
  };
  attributes: {
    Sunday: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    Monday: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    Tuesday: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    Wednesday: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    Thursday: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    Friday: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    Saturday: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface CourseWhoShouldAttend extends Struct.ComponentSchema {
  collectionName: 'components_course_who_should_attends';
  info: {
    displayName: 'Who Should Attend';
    icon: 'connector';
    description: '';
  };
  attributes: {
    Description: Schema.Attribute.Blocks;
    Key_Program_Features: Schema.Attribute.Component<
      'course.program-features',
      true
    > &
      Schema.Attribute.Required;
    Certification: Schema.Attribute.Component<'course.certification', false>;
  };
}

export interface CourseTestimonies extends Struct.ComponentSchema {
  collectionName: 'components_course_testimonies';
  info: {
    displayName: 'Testimonies';
    icon: 'heart';
  };
  attributes: {};
}

export interface CourseSchedule extends Struct.ComponentSchema {
  collectionName: 'components_course_schedules';
  info: {
    displayName: 'Schedule';
    icon: 'calendar';
    description: '';
  };
  attributes: {
    Title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.DefaultTo<'Weekdays'>;
    Starts: Schema.Attribute.Date &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    Ends: Schema.Attribute.Date &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    Days: Schema.Attribute.Component<'elements.days', false> &
      Schema.Attribute.Required;
    From: Schema.Attribute.Time & Schema.Attribute.Required;
    Till: Schema.Attribute.Time & Schema.Attribute.Required;
    Apply_Before: Schema.Attribute.Date & Schema.Attribute.Required;
  };
}

export interface CourseProgramFeatures extends Struct.ComponentSchema {
  collectionName: 'components_course_program_features';
  info: {
    displayName: 'Program Features';
    icon: 'gift';
  };
  attributes: {
    Title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    Description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 300;
      }>;
  };
}

export interface CourseOverview extends Struct.ComponentSchema {
  collectionName: 'components_course_overviews';
  info: {
    displayName: 'Overview';
    icon: 'layer';
  };
  attributes: {
    Overview: Schema.Attribute.Blocks & Schema.Attribute.Required;
    Learning_Outcomes: Schema.Attribute.Blocks & Schema.Attribute.Required;
    Curriculumn: Schema.Attribute.Component<'course.module', true> &
      Schema.Attribute.Required;
  };
}

export interface CourseModule extends Struct.ComponentSchema {
  collectionName: 'components_course_modules';
  info: {
    displayName: 'Module';
    icon: 'book';
  };
  attributes: {
    Title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    Content: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface CourseFee extends Struct.ComponentSchema {
  collectionName: 'components_course_fees';
  info: {
    displayName: 'Plan';
    icon: 'database';
    description: '';
  };
  attributes: {
    Title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    Fee: Schema.Attribute.BigInteger & Schema.Attribute.Required;
    Description: Schema.Attribute.String;
  };
}

export interface CourseExperience extends Struct.ComponentSchema {
  collectionName: 'components_course_experiences';
  info: {
    displayName: 'Experience';
    icon: 'handHeart';
  };
  attributes: {
    Description: Schema.Attribute.Blocks & Schema.Attribute.Required;
    Video: Schema.Attribute.Component<'elements.video', false>;
  };
}

export interface CourseDelivery extends Struct.ComponentSchema {
  collectionName: 'components_course_deliveries';
  info: {
    displayName: 'Delivery';
    icon: 'pinMap';
    description: '';
  };
  attributes: {
    Name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.DefaultTo<'Classroom'>;
    Schedule: Schema.Attribute.Component<'course.schedule', true> &
      Schema.Attribute.Required;
    Description: Schema.Attribute.Text;
  };
}

export interface CourseCourseSchedule extends Struct.ComponentSchema {
  collectionName: 'components_course_course_schedules';
  info: {
    displayName: 'Course Schedule';
    icon: 'calendar';
  };
  attributes: {
    Description: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
    Deliveries: Schema.Attribute.Component<'course.delivery', true> &
      Schema.Attribute.Required;
  };
}

export interface CourseCourseFees extends Struct.ComponentSchema {
  collectionName: 'components_course_course_fees';
  info: {
    displayName: 'Course Fees';
    icon: 'database';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Plans: Schema.Attribute.Component<'course.fee', true>;
  };
}

export interface CourseCertification extends Struct.ComponentSchema {
  collectionName: 'components_course_certifications';
  info: {
    displayName: 'Certification';
    icon: 'file';
  };
  attributes: {
    Preview: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    Description: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface CourseApplyNow extends Struct.ComponentSchema {
  collectionName: 'components_course_apply_nows';
  info: {
    displayName: 'Apply Now';
    icon: 'cursor';
  };
  attributes: {
    Description: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.slider': SharedSlider;
      'shared.seo': SharedSeo;
      'shared.rich-text': SharedRichText;
      'shared.quote': SharedQuote;
      'shared.media': SharedMedia;
      'elements.video': ElementsVideo;
      'elements.days': ElementsDays;
      'course.who-should-attend': CourseWhoShouldAttend;
      'course.testimonies': CourseTestimonies;
      'course.schedule': CourseSchedule;
      'course.program-features': CourseProgramFeatures;
      'course.overview': CourseOverview;
      'course.module': CourseModule;
      'course.fee': CourseFee;
      'course.experience': CourseExperience;
      'course.delivery': CourseDelivery;
      'course.course-schedule': CourseCourseSchedule;
      'course.course-fees': CourseCourseFees;
      'course.certification': CourseCertification;
      'course.apply-now': CourseApplyNow;
    }
  }
}
